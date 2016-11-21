package carsell.repo;

import carsell.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findById (Long id);
    Optional<Account> findByUserId (Long userId);
}
